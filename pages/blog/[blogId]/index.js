import { useRouter } from "next/router"

const blogId = () => {
    const router = useRouter();
    const { blogId } = router.query;
    return (
        <div>
            <h2>blog dinamic route :{blogId}</h2>
        </div>
    )
}

export default blogId