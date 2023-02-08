import Layout from '../../app/layout';
import { getAllPostIds, getPostData } from 'lib/posts';

export async function getStaticPaths({ params }) {
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function Post() {
    return <Layout>...</Layout>;
}