import { defineConfig } from 'astro/config';
import NetlifyCMS from 'astro-netlify-cms';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
  tailwind(),
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            name: 'blog',
            label: 'Blog Posts',
            folder: 'src/pages/blog',
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Post Title' },
              { name: 'body', widget: 'markdown', label: 'Post Body' },
              { name: 'layout', widget: 'hidden', label: 'Layout', default: "../../layouts/MarkdownPostLayout.astro" },
            ],
          },
          {
            name: 'portfolio',
            label: 'Portfolio',
            folder: 'src/pages/portfolio', 
            create: true,
            delete: true,
            fields: [
              { name: 'title', widget: 'string', label: 'Project Title' },
              { name: 'description', widget: 'markdown', label: 'Project Description' },
              { name: 'layout', widget: 'hidden', label: 'Layout', default: "../../layouts/MarkdownPostLayout.astro" },
              { name: 'image', widget: 'image', label: 'Project Image', choose_url: true, media_library: [{
                  config: [{
                    multiple: false
                  }]
                }]
              },
            ],
          },
          {
            name: 'page',
            label: 'Pages',
            files: [
              {
                name: 'home',
                label: 'Home',
                file: 'src/data/home.json',
                create: true,
                fields: [
                  { name: 'title', widget: 'string', label: 'Hero Title' },
                  { name: 'description', widget: 'text', label: 'Hero Description' },
                  { name: 'image', widget: 'image', label: 'Hero Image', choose_url: true, media_library: [{
                  config: [{
                    multiple: false
                  }]
                  }] },
                ],
              },
              {
                name: 'resume',
                label: 'Resume',
                file: 'src/data/resume.json',
                create: true,
                fields: [
                  { name: 'jobs', widget: 'list', label: 'Work History',
                  fields: [
                    { name: 'position', widget: 'string', label: 'Job Position' },
                    { name: 'company', widget: 'string', label: 'Company' },
                    { name: 'start_date', widget: 'string', label: 'Start Date' },
                    { name: 'end_date', widget: 'string', label: 'End Date' },
                    { name: 'duties', widget: 'list', label: 'Job Duties', 
                    fields: [
                      { name: 'duty', widget: 'string', label: 'Duty' },
                    ]}
                  ]
                  },
                ],
              }]
          },
          {
            name: 'menu',
            label: 'Menu',
            files: [
              {
                name: 'navigation',
                label: 'Navigation Bar',
                file: 'src/data/navigation.json',
                create: true,
                fields: [
                  {
                    name: 'navbar_links',
                    widget: 'list',
                    label: 'Nav Links',
                    required: true,
                    hint: 'Main menu navigation that appears in the header',
                    fields: [
                      { name: 'nav_title', label: 'Nav Title', widget: 'string', required: true, },
                      { name: 'url', label: 'URL', widget: 'string', required: true, },
                      { name: 'target', label: 'Target', widget: 'select', options: ["_blank", "_self"], required: true, },
                    ]
                  }
                ],
              }]
          },
        ],
      },
    }),
  ]
});