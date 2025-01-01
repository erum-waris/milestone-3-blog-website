import { Rule as RuleType } from '@sanity/types';

export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'text',
            validation: (Rule: RuleType) => Rule.required(),
        },
      {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule: RuleType) => Rule.required().min(10).max(2000),
        },
        {
             name: 'image',
             title: 'Image',
             type: 'image',
             options: {
                 hotspot: true,
             },
             validation: (Rule: RuleType) => Rule.required(),
         },
    ],
};

  
        