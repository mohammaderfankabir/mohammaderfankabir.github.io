import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export const post = defineType({
  name: "post",
  title: "Post",
  icon: DocumentTextIcon,
  type: "document",
  fields: [
    defineField({
      name: "short",
      type: "string",
      title: "Short Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Long Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "short",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "visibility",
      type: "string",
      options: {
        layout: "radio",
        list: [
          { title: "Public", value: "public" },
          { title: "Private", value: "private" },
        ],
      },
      initialValue: "public",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "timeRequired",
      type: "string",
      title: "Time Required (ISO 8601)",
      description: "E.g. PT3M for 3 minutes",
    }),
    defineField({
      name: "dateCreated",
      type: "datetime",
      title: "Date Created",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastModified",
      type: "datetime",
      title: "Last Modified",
    }),
    defineField({
      name: "changeFrequency",
      type: "string",
      title: "Change Frequency",
      options: {
        list: [
          { title: "Always", value: "always" },
          { title: "Hourly", value: "hourly" },
          { title: "Daily", value: "daily" },
          { title: "Weekly", value: "weekly" },
          { title: "Monthly", value: "monthly" },
          { title: "Yearly", value: "yearly" },
          { title: "Never", value: "never" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priority",
      type: "number",
      title: "Priority ",
      description: "(0.0–1.0)",
      initialValue: 0.5,
      validation: (Rule) => Rule.required().min(0).max(1),
    }),
  ],
  fieldsets: [
    {
      name: "details", // Section name for 'Post Details'
      title: "Post Details",
      options: {
        collapsible: true, // Makes this section collapsible in the Studio
        collapsed: false, // Initially expanded
      },
    },
    {
      name: "seo", // Section name for SEO settings
      title: "SEO",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
});
