import Link from 'next/link'
import { getSortedPostsData } from 'lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }
  

export default function ExampleFirstPost({ allPostsData }) {
    return (
        <div>
            <h1>First Post example</h1>
            <h2>
                <Link href="/">Back to homepage</Link>
                <section >
                    <h2 >Blog</h2>
                    <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                        </li>
                    ))}
                    </ul>
                </section>
            </h2>
        </div>
    );
}