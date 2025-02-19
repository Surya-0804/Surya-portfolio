import Image from 'next/image';

export const articles = [
  {
    title: (
      <a
        href="https://medium.com/@surya.abothula/dl-series-1-introduction-to-deep-learning-021054340d3b"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
        className="text-blue-400 hover:underline"
      >
        DL Series: Introduction to Deep Learning
      </a>
    ),
    description:
      'Explore the fundamentals of Deep Learning, its history, key concepts, and why it is transforming industries. This article sets the foundation for understanding neural networks and deep learning models.',
    content: (
      <div className="h-full w-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white p-5 rounded-md">
        Introduction to Deep Learning
      </div>
    ),
  },
  {
    title: (
      <a
        href="https://medium.com/@surya.abothula/dl-series-2-linear-regression-and-classification-with-perceptron-4a9386747ae6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
        className="text-blue-400 hover:underline"
      >
        DL Series: Linear Regression and Classification with Perceptron
      </a>
    ),
    description:
      'Dive into Linear Regression and the Perceptron algorithm. Understand how these fundamental techniques are used in machine learning to make predictions and classify data effectively.',
    content: (
      <div className="h-full w-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white p-5 rounded-md">
        Linear Regression & Perceptron
      </div>
    ),
  },
  {
    title: (
      <a
        href="https://medium.com/@surya.abothula/dl-series-3-mastering-loss-functions-and-gradient-descend-63a74f38f4f5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
        className="text-blue-400 hover:underline"
      >
        DL Series: Mastering Loss Functions and Gradient Descent
      </a>
    ),
    description:
      'Learn the importance of Loss Functions and how Gradient Descent optimizes neural networks. This article covers cost functions, backpropagation, and techniques to improve learning efficiency.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-gray-800 rounded-md p-5">
        <Image
          src="/articles/DLSeries3.png"
          width={300}
          height={300}
          className="h-auto w-auto object-cover rounded-md"
          alt="DL Series 3"
        />
      </div>
    ),
  },
];
