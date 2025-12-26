// lib/imageUpload.js
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Check if we're in development/local environment
const isDevelopment = process.env.NODE_ENV === "development";

// Storage provider: 'local', 'cloudinary', or 's3'
// const storageProvider =
//   process.env.NODE_ENV === "development"
//     ? "local"
//     : process.env.STORAGE_PROVIDER;

const storageProvider = "cloudinary"

// Configure Cloudinary
if (storageProvider === "cloudinary") {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

// Configure AWS S3
let s3Client = null;
if (storageProvider === "s3") {
  s3Client = new S3Client({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
}

/**
 * Save image locally in format: db_table_name/date/image_name
 */
async function saveLocally({ tableName, imageName, imageBuffer }) {
  const date = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    tableName,
    date
  );

  // Create directory if it doesn't exist
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const filePath = path.join(uploadDir, imageName);
  fs.writeFileSync(filePath, imageBuffer);

  // Return relative URL path
  return `/uploads/${tableName}/${date}/${imageName}`;
}

/**
 * Upload image to Cloudinary
 */
async function uploadToCloudinary({ tableName, imageName, imageBuffer }) {
  return new Promise((resolve, reject) => {
    const date = new Date().toISOString().split("T")[0];
    const folder = `/propertypulse/${tableName}/${date}`;

    cloudinary.uploader
      .upload_stream(
        {
          folder,
          public_id: imageName.split(".")[0],
          resource_type: "auto",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result.secure_url);
        }
      )
      .end(imageBuffer);
  });
}

/**
 * Upload image to AWS S3
 */
async function uploadToS3({ tableName, imageName, imageBuffer, mimeType }) {
  if (!s3Client) throw new Error("S3 client not initialized");

  const date = new Date().toISOString().split("T")[0];
  const key = `${tableName}/${date}/${imageName}`;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: key,
    Body: imageBuffer,
    ContentType: mimeType,
  });

  await s3Client.send(command);

  // Return the S3 URL
  const region = process.env.AWS_REGION || "us-east-1";
  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${region}.amazonaws.com/${key}`;
}

/**
 * Main upload function that routes to appropriate storage
 */
export async function uploadImage(options) {
  try {
    switch (storageProvider) {
      case "local":
        return await saveLocally(options);
      case "cloudinary":
        return await uploadToCloudinary(options);
      case "s3":
        return await uploadToS3(options);
      default:
        throw new Error(`Unknown storage provider: ${storageProvider}`);
    }
  } catch (error) {
    console.error("Image upload failed:", error);
    throw error;
  }
}
