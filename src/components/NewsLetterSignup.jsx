const NewsletterSignup = () => {
    return (
        <section className="flex items-center p-10 justify-center flex-col">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Subscribe to Our Newsletter</h2>
                <p className="mb-6 text-gray-600">
                    Stay updated with the latest news, offers, and updates from us. Sign up for our newsletter!
                </p>
                <form className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 w-full max-w-md text-gray-700 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-indigo-500 text-white px-6 py-2 rounded-r-md hover:bg-indigo-600 transition duration-300 ease-in-out"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSignup;
