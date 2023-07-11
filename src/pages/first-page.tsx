import Link from "next/link";

export default function FirstPost(){
  return (
    <>
      <h1>First Post</h1>

      <Link href="/post/blog-page">blog-pageへ移動</Link>
    </>
  )
  }
