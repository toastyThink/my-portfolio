import './Skills.css'
import { forwardRef } from 'react';

const posts = [
    {
      id: 1,
      title: 'Front End Technologies + Skills',
      description: "HTML + CSS + SASS ✧ Tailwind.css + Javascript + Python ✧ Responsive Design + Bootstrap + ReactJS + Django",
      date: 'Oct 16, 2023',
      datetime: '2023-10-16',
      category: { title: 'Front End Skills', href: '#' },
      author: {
        // name: 'Brendan Shaeffer',
        // role: 'Website Developer / Fullstack',
          },
    },
    {
        id: 2,
        title: 'Back End Technologies + Skills',
        description:
          'NodeJS + Express ✧ PostgreSQL ✧ SQL + MongoDB ✧ Django + AJAX ✧ RESTful Programming',
        date: 'Nov 27, 2023',
        datetime: '2023-11-23',
        category: { title: 'Back End Skills', href: '#' },
        author: {
        //   name: 'Brendan Shaeffer',
        //   role: 'Website Developer / Fullstack',
       
        },
      },
      {
        id: 3,
        title: 'Additional Technologies + Skills',
        description:
          'Git ✧ Github Docker ✧ Slack ✧ Object-Oriented Programming ✧ Figma Wireframes ✧ Balsamic ✧ Heroku ✧ Netlify',
        date: 'Jan 23, 2024',
        datetime: '2024-01-23',
        category: { title: 'Additional Technologies & SKills', href: '#' },
        author: {
        //   name: 'Brendan Shaeffer',
        //   role: 'Website Developer / Fullstack',
              },
      },
  ]

const Skills = forwardRef( function Skills(props, ref){
        return (

            <div  ref={ref} className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Here's some of the skills and tools I like to use</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                 Because I'm always learning more, this list is in continual development. Check back often to see new updates!
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                  <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

            
        )
    })

  
  export default Skills;

//   <div className="desktopS" ref={ref}>
//                 <div className="frame-3S">
//                     <div className="frame-4S">
//                         <p className="pS">Here are the technologies I use. This list is always growing!</p> 
//                         <div className="text-wrapper-4S">Skills</div>
//                     </div>
//                 </div>
//                 <div className="frameS">
//                     <div className="frame-wrapperS"> 
//                         <div className="divS">
//                             <p className="text-wrapperS">
//                                 HTML + CSS + SASS + Javascript + Python ✧ Responsive Design + Bootstrap + ReactJS + Django
//                             </p>
//                             <div className="text-wrapper-2S">Frontend</div>
//                         </div>
//                     </div>
//                     <div className="div-wrapperS">
//                         <div className="divS">
//                             <p className="text-wrapperS"> 
//                                 NodeJS + Express +✧ SQL + MongoDB + ✧ Django + AJAX + ✧ RESTful Programming
//                             </p>
//                             <div className="text-wrapper-2S">Backend</div>
//                         </div>
//                     </div>
//                     <div className="frame-2S">
//                         <div className="divS">
//                             <p className="text-wrapperS">
//                                 Git + Github +Slack ✧ Object-Oriented Programming +  ✧ Wireframes + Heroku + Netlify
//                             </p>
//                             <div className="text-wrapper-3S">Additional</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>