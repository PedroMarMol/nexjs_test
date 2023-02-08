import Link from 'next/link'

export default function ExampleFirstPost() {
    return (
        <div>
            <h1>First Post example</h1>
            <h2>
                <Link href="/">Back to homepage</Link>
            </h2>
        </div>
    );
}