import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts')

export const getSortedPostsData = () => {
    // const fileNames = readdirSync(postsDirectory)

    // const allPostsData = fileNames.map((filename) => {
    //     const id = filename.replace(/\.md$/, '')

    //     const fullPath = path.join(postsDirectory, fileName)
    //     const fileContents = fs.readFileSync(fullpath, 'utf-8')

    //     const matterResult = matter(fileContents)

    //     return {
    //         id: 'pre-rendering',
    //         title: 'When to Use Static Generation v.s. Server-side Rendering',
    //         date: '2020-01-02'
    //     }
    // })

    return [
        {
            id: 'pre-rendering',
            title: 'Two Forms of Pre-rendering',
            date: '2020-01-01'
        },
        {
            id: 'ssg-ssr',
            title: 'When to Use Static Generation v.s. Server-side Rendering',
            date: '2020-01-02'
        }
    ]
}

export const getAllPostsIds = () => {
    // const fileNames = fs.readdirSync(postsDirectory)
    // return fileNames.map((file) => {
    //     return {
    //         params: {
    //             id: fileNames.replace(/\.md$/, ''),
    //         }
    //     }
    // })

    return [
        {
            params: {
                id: "pre-rendering"
            },

        },
        {
            params: {
                id: "ssg-ssr"
            }
        }
    ]
}

export const getPostData = (id) => {
    // const fullPath = path.join(postsDirectory, `${id}.md`);
    // const fileContents = fs.readFileSync(fullPath, 'utf8');

    // // Use gray-matter to parse the post metadata section
    // const matterResult = matter(fileContents);

    // // Combine the data with the id
    // return {
    //     id,
    //     ...matterResult.data,
    // };

    if (id === 'pre-rendering') {
        return {
            id,
            title: 'Two Forms of Pre-rendering',
            date: '2020-01-01'
        }
    } else if (id === 'ssg-ssr') {
        return {
            id,
            title: 'When to Use Static Generation v.s. Server-side Rendering',
            date: '2020-01-02'
        }
    }

}