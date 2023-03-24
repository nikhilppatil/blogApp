import React, { useState } from "react"

const dumyContent = [{
    title: "You Are Not Just Talented, You Are Spiritually Gifted",
    blogContent: "“For those who lead and have a tendency toward pride and self-sufficiency, it may be humbling to know that God wants them to depend on and be built up by others with different gifts. For others, though, this will mean accepting what God has given them and then living and working in the community for the benefit of the body, knowing that this is their God-given and Spirit-enabled duty to the body. Just as there is no place for pride, so there is no place for false humility.”"
},
{title:"Living with Purpose",
blogContent:"“Why am I here?” It’s the biggest existential question we all must wrestle with. We all long to understand our purpose. And if we truly want to understand our purpose we must know it all starts with God. It’s not about you; it’s not about me; it’s not about this person or that person. Our purpose is far greater than ourselves and starts with understanding the author of it all. Lean into this series as we rediscover what it is like to live purpose-driven lives in light of being made by God and for God and with a grand and fulfilling purpose!"}
]
const Blog = () => {

    const [title, setTitle] = useState()
    const [content, setContent] = useState(dumyContent)

    const handleBlogContent = (e) =>{
        e.preventDefault()
    }

    return (
        <>
            <div>
                <p>Hey</p>
                <button>Edit</button>
                <button>Delete</button>

            </div>
        </>
    )
}
export default Blog