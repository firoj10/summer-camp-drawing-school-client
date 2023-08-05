import { FaClock, FaUser, } from 'react-icons/fa';
import img1 from './../../../assets/blog/blog-1.jpg'
import img2 from './../../../assets/blog/blog-2.jpg'
import img3 from './../../../assets/blog/blog-3.jpg'
import { motion } from 'framer-motion';
const LatestArticles = () => {

    return (

        <div>
            <h1></h1>
            <div className='py-20 my-20'>
                <h2 className="text-4xl  font-bold  text-center">Our Latest Articles</h2>
                <p className=' py-2  text-center'>Through a combination of lectures, readings, discussions, students will gain a solid <br></br> foundation in educational psychology.</p>
            </div>
            <div className="md:flex gap-6">
                <div className='flex  flex-col gap-6'>
                    <div className="md:flex  p-4   shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                        {/* <figure><img src={img1} alt="Movie" /></figure> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img
                                src={img3}
                                className='rounded-xl object-cover'
                                alt=''
                                style={{ height: '280px' }}
                            />
                        </motion.div>
                        <div className="card-body">
                            <div className='flex gap-3 py-3'>
                                <div className='flex justify-center items-center'><span className='p-2'>  <FaUser className='text-blue-400 ' /> </span> <span>Admin</span></div>
                                <div className='flex justify-center items-center'>
                                    <span className='p-2'>  <FaClock className='text-blue-400 ' /></span>
                                    <span>2 Aug,2023</span>
                                </div>
                            </div>
                            <h2 className="card-title py-3">Education Week News and Views on Education Policy and Practice.</h2>

                            <div className="card-actions ">
                                <button className="btn outline-offset-3 btn-outline">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex  p-4  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
                        {/* <figure><img src={img2} alt="Movie" /></figure> */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img
                                src={img2}
                                className='rounded-xl object-cover'
                                alt=''
                                style={{ height: '300px' }}
                            />
                        </motion.div>
                        <div className="card-body">
                            <div className='flex gap-3 '>
                                <div className='flex justify-center items-center'><span className='p-2'>  <FaUser className='text-blue-400 ' /></span> <span>Admin</span></div>
                                <div className='flex justify-center items-center'>
                                    <span className='p-2'>  <FaClock className='text-blue-400 ' /></span>
                                    <span>2 Aug,2023</span>
                                </div>
                            </div>
                            <h2 className="card-title py-3">The Learning Network Teaching and Learning With The New York Times.</h2>

                            <div className="card-actions ">
                                <button className="btn outline-offset-3 btn-outline">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
                    {/* <figure><img src={img3} alt="Shoes" /></figure> */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img
                            src={img1}
                            className='rounded-xl object-cover text-center'
                            alt=''
                            style={{ height: '300px' }}
                        />
                    </motion.div>
                    <div className="card-body">
                        <div className='flex gap-3 '>
                            <div className='flex justify-center items-center'><span className='p-2'>  <FaUser className='text-blue-400 ' /> </span> <span>Admin</span></div>
                            <div className='flex justify-center items-center'>
                                <span className='p-2'>  <FaClock className='text-blue-400 ' /></span>
                                <span>2 Aug,2023</span>
                            </div>
                        </div>
                        <h2 className="card-title py-2">Only One Thing Impossible For God Find Sense in Any.</h2>

                        <div className="card-actions ">
                            <button className="btn outline-offset-3 btn-outline">Buy Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LatestArticles;