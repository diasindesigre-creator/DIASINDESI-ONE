"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const categoryId = formData.get("categoryId");

  await prisma.product.create({
    data: {
      code: (formData.get("code") as string) || null,
      barcode: (formData.get("barcode") as string) || null,

      name: (formData.get("name") as string).trim(),

      description: (formData.get("description") as string) || null,

      brand: (formData.get("brand") as string) || null,

      cost: Number(formData.get("cost") || 0),

      price: Number(formData.get("price") || 0),

      stock: Number(formData.get("stock") || 0),

      minStock: Number(formData.get("minStock") || 0),

      image: null,

      ...(categoryId
        ? {
            category: {
              connect: {
                id: Number(categoryId),
              },
            },
          }
        : {}),
    },
  });

  redirect("/products");
}