export default function BlogPost() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Featured Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden rounded-2xl mb-8">
        <img
          src="https://i.pinimg.com/1200x/2c/4f/75/2c4f75395b1853b8bf4562b0c6817695.jpg"
          alt="Jollof Rice and Suya Platter"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Title and Metadata */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-green-800 mb-4 leading-tight">
          Choosing the right sofa for your living room.
        </h1>
        <div className="text-gray-600 text-sm md:text-base flex justify-center space-x-4">
          <span>By <strong>Taiwo Oluwagbotemi</strong></span>
          <span>•</span>
          <span>Nov 13, 2025</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6 text-gray-800 leading-relaxed">
          <p>The sofa is at the heart of your living room – it's the place where you unwind after a long day, spend time with loved ones and even sneak in the occasional nap. However, the investment in a sofa is significant, both financially and in getting it right in terms of comfort. With so many options available, making the right choice needs a keen eye for size, comfort and long-term appeal.
          </p>
          <p>So, if you're wondering how to choose a sofa for your living room, Taiwo & Co. is here to make the process easier. Follow our tips below.
          </p>
     
          <h2 className="text-2xl font-semibold text-green-700 mt-6">Measure your space</h2>
          <p>Measure your space. This includes your free floor space and the walkway from your main door to the living room. Think about the other furniture in the room and how much space you need to leave to comfortably move around it. If you're having trouble visualising, masking tape or newspaper can help map out your placement.
          </p>
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-green-800">
            “Taiwo & Co. is here to bring your sofa ideas to life. Our experts have all the design know-how and inspiration to get you started.”
          </blockquote>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <h3 className="text-xl font-bold text-green-800 border-b-2 border-green-700 pb-2">
            Related Posts
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://www.hammonds-uk.com/media/hexda2vm/towel-studio-7t49t-mlk08-unsplash.jpg?format=jpg&height=295&quality=90&rsampler=lanczos8&rxy=0.5%2C0.5&width=496"
                alt="Bold patterns"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                  2025 trends: Incorporating bold patterns into your living room
                </h4>
                <p className="text-sm text-gray-500">4 min read</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://www.hammonds-uk.com/media/m0uaj0wa/andrew-neel-dld5lvnfblu-unsplash.jpg?format=jpg&height=295&quality=90&rsampler=lanczos8&rxy=0.5%2C0.5&width=496"
                alt="Modern Style"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                  How to give your living room a modern makeover
                </h4>
                <p className="text-sm text-gray-500">4 min read</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src="https://www.hammonds-uk.com/media/0dliohvo/3000x1688-linje-silver-grey-living-cgi-02.jpg?format=jpg&height=295&quality=90&rsampler=lanczos8&rxy=0.5%2C0.5&width=496"
                alt="Multipurpose Living Area"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-semibold text-gray-800 hover:text-green-700 cursor-pointer">
                How to create a multi-purpose living area
                </h4>
                <p className="text-sm text-gray-500">3 min read</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}