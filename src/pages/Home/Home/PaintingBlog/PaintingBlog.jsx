import img1 from './../../../../assets/blog/1.jpg';
import img2 from './../../../../assets/blog/3.jpg';
import img3 from './../../../../assets/blog/4.jpg';
import img4 from './../../../../assets/blog/5.jpg';

const PaintingBlog = () => {
  const blogPosts = [
    {
      title: 'Mastering Brush Techniques: A Step-by-Step Guide',
      imageSrc: img1,
      date: 'June 1, 2023',
      author: 'John Doe',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur eros et nunc scelerisque, vitae convallis eros consectetur.',
    },
    {
      title: 'Choosing the Right Paint Colors for your Artwork',
      imageSrc: img2,
      date: 'May 15, 2023',
      author: 'Jane Smith',
      content: 'Integer a nisi ligula. Aliquam cursus feugiat malesuada. Mauris tempus, lacus ut volutpat ullamcorper, orci augue aliquam urna, in pellentesque nisi odio ac felis.',
    },
    {
      title: 'Choosing the Right Paint Colors for your Artwork',
      imageSrc: img3,
      date: 'May 15, 2023',
      author: 'Jane Smith',
      content: 'Integer a nisi ligula. Aliquam cursus feugiat malesuada. Mauris tempus, lacus ut volutpat ullamcorper, orci augue aliquam urna, in pellentesque nisi odio ac felis.',
    },
    {
      title: 'Choosing the Right Paint Colors for your Artwork',
      imageSrc: img4,
      date: 'May 15, 2023',
      author: 'Jane Smith',
      content: 'Integer a nisi ligula. Aliquam cursus feugiat malesuada. Mauris tempus, lacus ut volutpat ullamcorper, orci augue aliquam urna, in pellentesque nisi odio ac felis.',
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto py-8">
        <h2 className="text-4xl py-20 font-bold mb-6 text-center">Painting  Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <div className="bg-white p-4 rounded shadow" key={index}>
              <img className="mb-4 w-full  h-[200px]" src={post.imageSrc}  alt={post.title} />
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
              <button className='p-4 bg-light'>Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaintingBlog;


