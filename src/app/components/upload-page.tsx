export const UploadPage = () => {
  return (
    <main>
      <nav className="mt-2">
        <div className="max-w-4xl bg-white  mx-auto px-6 py-3 flex items-center justify-between rounded-full">
          <img
            src="https://i.postimg.cc/3Ntb2Qpg/resumind.png"
            alt="logo"
            className="h-5 w-auto"
          />

          <button className="px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#6F7AF2] via-[#9098F7] to-[#6F7AF2] hover:opacity-90">
            Upload your resume
          </button>
        </div>
      </nav>

      <div className="flex items-center text-center flex-col font-sans pt-11 space-y-6">
        <div className="text-7xl text-gradient font-semibold leading-tight">
          Smart feedback
          <span className="block text-gradient">for your dream job</span>
        </div>

        <p className="text-lg font-sans max-w-2xl mx-auto">
          Drop your resume for an ATS score and improvement tips
        </p>
      </div>
    </main>
  );
};
