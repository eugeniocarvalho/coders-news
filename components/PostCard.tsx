import { useRouter } from "next/router"
import { useCallback } from "react";


export default function PostCard({post}) {
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    router.push(`/post/${post.id}`)
  }, [])
  return (
    <div className="w-[25rem]" onClick={handlePostClick}>
      <img src={post.thumbnail} alt="Post thumbnail" className="w-full h-60 object-cover rounded-[1rem] cursor-pointer mb-"/>
      <h3 className="font-bold mb-[0.625rem] text-2xl">{post.title}</h3>
      <span className="text-lg">{post.description}</span>
    </div>
  )
}