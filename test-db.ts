import { db } from "./lib/db";
import { eq } from "drizzle-orm";
import { savedItems } from "./lib/db/schema";

async function main() {
  try {
    console.log("Running query...");
    const items = await db.query.savedItems.findMany({
      where: eq(savedItems.userId, "user_3EdaRhu4LsnqXa4LkprsPBMHc2k"),
      with: {
        savedItemTags: {
          with: {
            tag: true,
          },
        },
      },
    });
    console.log("Success! Items count:", items.length);
  } catch (err) {
    console.error("Query failed with error details:");
    console.error(err);
  }
  process.exit(0);
}

main();
