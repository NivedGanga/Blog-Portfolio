import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../containers/Layout/Layout"
import Home from "../pages/Home/Home"
import Blogs from "../pages/Blogs/Blogs"
import NewBlog from "../pages/NewBlog/NewBlog"
import DetailedBlog from "../pages/Blogs/DetailedBlog"

interface Props { }

function RoutesProvider(props: Props) {
    const { } = props

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" >
                        <Route index element={<Blogs />} />
                        <Route path="view/:id" element={<DetailedBlog />} />
                        <Route path="edit-blog/:id" element={<NewBlog />} />
                    </Route>
                </Route>
                <Route path="new-blog" element={<NewBlog />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesProvider
