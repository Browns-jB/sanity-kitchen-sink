export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603bfce9d579f1edfa7c72c3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-s2jw5pw6',
                  apiId: 'c483acc6-a3f9-45ff-a225-adf88d37c71d'
                },
                {
                  buildHookId: '603bfce90a596a3130fbade8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zmb5kdxi',
                  apiId: '6cf1a70f-76c0-4d23-a265-4dcfdb32f08b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Browns-jB/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zmb5kdxi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
