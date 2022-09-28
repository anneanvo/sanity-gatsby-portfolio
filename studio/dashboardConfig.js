export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6334618d1ca37705eacc50b6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6f6ytqj6',
                  apiId: '9811af40-07aa-4c2a-9f36-d9b44246a880'
                },
                {
                  buildHookId: '6334618d3c0eb90668a1ec77',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-o6xeci2k',
                  apiId: 'e6e4e357-193a-491c-9c63-2bab832afd14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anneanvo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-o6xeci2k.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
