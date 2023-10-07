import { useRouter } from "next/router"

const commentId = () => {
    const router = useRouter();
    const { blogId, commentId } = router.query;
    return (
        <div>
            <h2>blog dinamic route :{blogId} - {commentId}</h2>
        </div>
    )
}

export default commentId