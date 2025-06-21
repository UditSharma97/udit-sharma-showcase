
import React from 'react';
import { FileText, Clock, Users } from 'lucide-react';

const Research = () => {
  const papers = [
    {
      title: "Traders Enhancing Big Data Security in Cloud Computing",
      summary: "This research explores innovative approaches to big data security in cloud computing environments, leveraging artificial intelligence and blockchain technologies to create more robust and efficient security frameworks for modern data processing systems.",
      status: "In Progress",
      domain: "Cloud Computing & AI Security",
      keywords: ["Big Data", "Cloud Security", "AI", "Blockchain", "Data Protection"]
    }
  ];

  return (
    <section id="research" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-white mb-6">
            Research & Publications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-lato">
            Contributing to the advancement of technology through research in cutting-edge domains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 hover:scale-105 transform"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <FileText size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-montserrat text-white mb-2">
                    {paper.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{paper.status}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{paper.domain}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 font-lato mb-6 leading-relaxed">
                {paper.summary}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold font-montserrat text-white mb-3">
                  Key Areas:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, keywordIndex) => (
                    <span
                      key={keywordIndex}
                      className="bg-slate-700 text-blue-400 px-3 py-1 rounded-full text-sm font-lato"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700 rounded-lg p-4">
                <p className="text-sm text-gray-400 font-lato">
                  <strong>Status:</strong> Currently in progress. Expected completion and submission 
                  to relevant conferences in the coming months.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-slate-700 rounded-lg p-6">
            <h3 className="text-xl font-bold font-montserrat text-white mb-2">
              Research Interests
            </h3>
            <p className="text-gray-100 font-lato">
              Artificial Intelligence • Machine Learning • Cloud Computing Security • 
              Big Data Analytics • Blockchain Technology • Cybersecurity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
