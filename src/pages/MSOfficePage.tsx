import React from 'react';
import { FileSpreadsheet, FileText, Monitor, Presentation } from 'lucide-react';

export default function MSOfficePage() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#0a061f] to-violet-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">MS Office Suite</h1>
            <p className="text-xl text-violet-200 max-w-3xl mx-auto">
              Master essential Microsoft Office applications
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Course Overview</h2>
              <ul className="space-y-4 text-violet-200">
                <li className="flex items-start">
                  <FileText className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Microsoft Word document creation and formatting</span>
                </li>
                <li className="flex items-start">
                  <FileSpreadsheet className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Excel spreadsheets and data analysis</span>
                </li>
                <li className="flex items-start">
                  <Presentation className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>PowerPoint presentation design</span>
                </li>
                <li className="flex items-start">
                  <Monitor className="w-5 h-5 text-violet-400 mt-1 mr-3" />
                  <span>Office 365 cloud features</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Applications Covered</h2>
              <ul className="space-y-2 text-violet-200">
                <li>• Microsoft Word</li>
                <li>• Microsoft Excel</li>
                <li>• Microsoft PowerPoint</li>
                <li>• Microsoft Outlook</li>
                <li>• Microsoft OneNote</li>
                <li>• OneDrive and SharePoint</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <div className="bg-[#1a1133]/80 rounded-xl p-8 border border-violet-500/20">
              <h2 className="text-2xl font-bold text-white mb-6">Skill Levels</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Basic</h3>
                  <p className="text-violet-200">Essential features and functions</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Intermediate</h3>
                  <p className="text-violet-200">Advanced tools and automation</p>
                </div>
                <div className="p-6 bg-violet-900/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Advanced</h3>
                  <p className="text-violet-200">Expert features and integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}