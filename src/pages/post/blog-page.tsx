import Link from "next/link";

export default function BlogPage(){
  return (
    <>
      <h1>Blog Page</h1>

      <Link href="/first-page">first-pageへ移動</Link><br />
      <Link href="/second-page">second-pageへ移動</Link><br />
      <Link href="/third-page">third-pageへ移動</Link><br />
    </>
  )
  }
