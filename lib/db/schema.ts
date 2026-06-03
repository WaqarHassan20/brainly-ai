import { pgTable, serial, text, varchar, timestamp, integer, primaryKey, index } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// 1. Saved Items Table
export const savedItems = pgTable(
  "saved_items",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id", { length: 255 }).notNull(), // Clerk User ID
    platform: varchar("platform", { length: 50 }).notNull(),
    iconBg: varchar("icon_bg", { length: 100 }).notNull(),
    title: text("title").notNull(),
    url: text("url").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    description: text("description").notNull(),
    thumbnailGradient: varchar("thumbnail_gradient", { length: 100 }).notNull(),
    accentColor: varchar("accent_color", { length: 20 }),
  },
  (table) => [
    index("user_id_idx").on(table.userId), // Index on userId for fast query of a user's items
  ]
);

// 2. Tags Table
export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).unique().notNull(),
});

// 3. Many-to-Many Join Table (Saved Items <-> Tags)
export const savedItemTags = pgTable(
  "saved_item_tags",
  {
    savedItemId: integer("saved_item_id")
      .notNull()
      .references(() => savedItems.id, { onDelete: "cascade" }),
    tagId: integer("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.savedItemId, table.tagId] }),
  ]
);

// ── Relations ──

export const savedItemsRelations = relations(savedItems, ({ many }) => ({
  savedItemTags: many(savedItemTags),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  savedItemTags: many(savedItemTags),
}));

export const savedItemTagsRelations = relations(savedItemTags, ({ one }) => ({
  savedItem: one(savedItems, {
    fields: [savedItemTags.savedItemId],
    references: [savedItems.id],
  }),
  tag: one(tags, {
    fields: [savedItemTags.tagId],
    references: [tags.id],
  }),
}));
