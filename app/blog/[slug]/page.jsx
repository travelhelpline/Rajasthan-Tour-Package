import Image from "next/image";
import Comment from '@/components/CommentSection';
import SearchBar from '@/components/SearchBar';
import { blogCategories, blogs, getBlogsByCategory } from '@/data/Blogs';
import Link from 'next/link';
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaShareAlt,
    FaTwitter,
    FaUser,
    FaWhatsapp,
} from 'react-icons/fa';
import { FaCalendarDays } from 'react-icons/fa6';


export async function generateMetadata({ params }) {
    const blog = blogs.find((b) => b.slug === params.slug);

    if (!blog) {
        return {
            title: blog.title.slice(0, 4) + '...',
            description: blog.description.slice(0, 25) + '...',
        };
    }

    return {
        title: blog.metaTitle,
        description: blog.metaDescription,
        alternates: {
            canonical: blog.canonical
        },
        keywords: blog.keywords,
        openGraph: {
            title: blog.metaTitle,
            description: blog.metaDescription,
            url: `https://www.rajasthantourpackages.in/blog/${blog.slug}`,
            images: [
                blog.image,
            ],
            site_name: 'Rajasthan Tour Packages',
            type: 'website',
            locale: 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: blog.metaTitle,
            description: blog.metaDescription,
            images: [blog.image],
            site: "@rajasthantourpackages",
        },
    };
}
const BlogPost = ({ params }) => {

    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) {
        return <p>Blog not found</p>;
    }
    const filteredBlogs = getBlogsByCategory(blogs, blog.category)
    return (
        <>
            <div className="container-fluid py-4 blog-slug mt-5 pt-5 px-0">
                <div className="container px-0 d-flex justify-content-center align-items-center w-100 days-container overview destination">
                    <div className="row d-flex justify-content-center align-items-start px-0 w-100">
                        <div className="col-lg-8 col-md-12 col-sm-12 px-sm-0 px-md-0 px-lg-2">

                            {/* blog */}
                            <div className="insider px-3">
                                <div className="slug-image-container mb-2">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        title={blog.title}
                                        width={1500}
                                        height={600}
                                    />
                                </div>
                                <hr />
                                <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                                    <p className="w-auto blog-author mb-0 fw-bold d-flex align-items-center justify-content-center"><span className='color-tertary me-2 d-flex p-2 bg-tertary-down rounded-5'><FaUser /></span>{blog.author}</p>
                                    <p className="text-black w-auto px-0 blog-dot mb-0">▪</p>
                                    <p className="w-auto blog-date mb-0 fw-bold d-flex align-items-center justify-content-center"><span className='color-tertary me-2 d-flex p-2 bg-tertary-down rounded-5'><FaCalendarDays /></span>{blog.date}</p>
                                </div>
                                <h1>{blog.heading}</h1>
                                <hr style={{ borderColor: 'var(--color-black)' }} />
                                <div className='blog-content-slug'>
                                    {blog.more}
                                </div>
                            </div>

                            {/* comment */}
                            <div className="insider px-3 mt-3">
                                <Comment selectedBlog={blog.heading} />
                            </div>

                            {/* blog share */}
                            <div className="insider px-3 mt-3">
                                <div className="bg-tertary-down mt-3 p-2 rounded-4 d-flex flex-column justify-content-center align-items-center">
                                    <span className="color-tertary bg-tertary-down rounded-5 p-2 my-2 d-flex justify-content-center align-items-center">
                                        <FaShareAlt />
                                    </span>
                                    <h4 className='text-center text-capitalize fw-normal'>share this <span className="fw-bold"> blog</span></h4>
                                </div>
                                <div className="col">
                                    <div className="rounded-4 py-4 social-icons d-flex justify-content-center gap-3">
                                        {/* Facebook */}
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=https://rajasthantourpackages.in/blog/${blog.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border rounded-5 border-black text-black p-3 d-flex"
                                        >
                                            <FaFacebook />
                                        </a>

                                        {/* Instagram */}
                                        <a
                                            href={`https://www.instagram.com/?url=https://rajasthantourpackages.in/blog/${blog.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border rounded-5 border-black text-black p-3 d-flex"
                                        >
                                            <FaInstagram />
                                        </a>

                                        {/* Twitter */}
                                        <a
                                            href={`https://twitter.com/intent/tweet?url=https://rajasthantourpackages.in/blog/${blog.slug}&text=Check+this+out!`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border rounded-5 border-black text-black p-3 d-flex"
                                        >
                                            <FaTwitter />
                                        </a>

                                        {/* WhatsApp */}
                                        <a
                                            href={`https://api.whatsapp.com/send?text=Check+out+this+blog!+https://rajasthantourpackages.in/blog/${blog.slug}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border rounded-5 border-black text-black p-3 d-flex"
                                        >
                                            <FaWhatsapp />
                                        </a>

                                        {/* Mail */}
                                        <a
                                            href={`mailto:?subject=Check+out+this+blog&body=https://rajasthantourpackages.in/blog/${blog.slug}`}
                                            className="border rounded-5 border-black text-black p-3 d-flex"
                                        >
                                            <FaEnvelope />
                                        </a>
                                    </div>
                                </div>
                                <hr />

                                {/* contact redirections */}
                                <div className="row d-flex align-items-center justify-content-between py-2">
                                    <Link href="https://rajasthantourpackages.in/contact-us" className="w-auto d-inline" style={{ textDecoration: 'underline', color: 'var(--color-tertary)', fontWeight: 'bold' }}>contact us
                                    </Link>
                                    <Link href="/" className="w-auto d-inline" style={{ textDecoration: 'underline', color: 'var(--color-tertary)', fontWeight: 'bold' }}>Rajasthan Tour Packages
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* sidebar */}
                        <div className="col-lg-4 col-ms-12 col-sm-12 side-nav px-sm-0 px-md-0 px-lg-2">

                            {/* search */}
                            <div className="sidebar-menu w-100 z-9999 mb-3 search-sidebar flex-column">
                                <p className='mb-0 text-uppercase'>
                                    <span className='blog-subhead-gradient d-inline'>{blog.category}</span>
                                </p>
                                <h4 className="text-capitalize py-1">search</h4>
                                <SearchBar blogs={filteredBlogs} styles="rounded-4 w-100 p-3" placeholder="search here" />
                            </div>

                            {/* popular posts */}
                            <div className="sidebar-menu mb-3 w-100 z-9999 flex-column">
                                <h4 className="text-capitalize py-1">popular <span className="fw-normal d-inline">insights</span></h4>
                                <ul className="list-group list-group-flush w-100">
                                    {filteredBlogs.slice(0, 3).map((item, index) => (
                                        <li key={index} className="list-group-item hovered-link">
                                            <Link className='w-100 px-0 d-flex border-0 ' href={`${item.slug}`}>{item.heading}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* comments */}
                            <div className="sidebar-menu w-100 z-9999 flex-column">
                                <h4 className="text-capitalize py-1">comments</h4>
                                <ul className="p-0 w-100 d-flex justify-content-start flex-wrap align-items-center gap-2">
                                    <p className='mb-0 text-capitalize text-center'>no comments to show</p>
                                </ul>
                            </div>

                            {/* categories */}
                            <div className="sidebar-menu w-100 z-9999 flex-column">
                                <h4 className="text-capitalize py-1">categories</h4>
                                <ul className="p-0 w-100 d-flex justify-content-start flex-wrap align-items-center gap-2">
                                    {blogCategories.map((item, index) => (
                                        <li key={index} className="list-group-item">
                                            <Link className='w-100 d-flex border-0' href={`/blog/categories${item.path}`}> <span className="color-tertary me-1">•</span> {item.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPost;
