import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostsIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostsIds()

    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {

    return (
        <Layout>
            <Head>
                <title>
                    {postData.title}
                </title>
            </Head>

            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    {postData.date}
                </div>
            </article>

        </Layout>
    )
}