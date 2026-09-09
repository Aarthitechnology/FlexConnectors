import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  Upload,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function CandidateSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resumeName, setResumeName] = useState("");

  const handleResumeChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setResumeName("");
      return;
    }

    if (file.type !== "application/pdf") {
      alert("Please upload your resume in PDF format.");
      event.target.value = "";
      setResumeName("");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Resume size must be less than 5 MB.");
      event.target.value = "";
      setResumeName("");
      return;
    }

    setResumeName(file.name);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">

      {/* =====================================================
          LEFT BRANDING SECTION
      ====================================================== */}
      <div className="hidden lg:flex lg:w-[42%] min-h-screen bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 text-white relative overflow-hidden">

        {/* Decorative circles */}
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-white/10" />
        <div className="absolute -bottom-40 -right-32 w-[480px] h-[480px] rounded-full bg-white/10" />

        <div className="relative z-10 w-full flex flex-col px-12 py-10">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
              <Sparkles size={25} />
            </div>

            <div>
              <h1 className="text-2xl font-bold leading-none">
                FlexConnect
              </h1>

              <p className="text-blue-200 text-xs tracking-[0.3em] uppercase mt-1">
                AI
              </p>
            </div>

          </div>

          {/* Center Content */}
          <div className="flex-1 flex items-center">

            <div className="max-w-lg">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-6">
                <Sparkles size={16} />
                Build your professional profile
              </div>

              <h2 className="text-5xl font-bold leading-[1.1]">
                Let opportunities
                <br />
                <span className="text-blue-200">
                  find you.
                </span>
              </h2>

              <p className="text-blue-100 text-lg leading-relaxed mt-6 max-w-md">
                Create your profile once and let FlexConnect AI connect your
                skills with the right opportunities.
              </p>

              {/* Benefits */}
              <div className="mt-9 space-y-4">

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={21} />
                  <span>AI-powered skill matching</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={21} />
                  <span>Discover relevant opportunities</span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 size={21} />
                  <span>Identify your missing skills</span>
                </div>

              </div>

            </div>

          </div>

          {/* Footer */}
          <p className="text-blue-200 text-sm">
            Connecting talent with opportunities
          </p>

        </div>
      </div>


      {/* =====================================================
          RIGHT FORM SECTION
      ====================================================== */}
      <div className="w-full lg:w-[58%] min-h-screen overflow-y-auto flex justify-center">

  <div className="w-full max-w-2xl px-6 sm:px-10 py-10 lg:py-12">

          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-8">

            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
              <Sparkles size={23} className="text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                FlexConnect
              </h1>

              <p className="text-blue-600 text-xs tracking-[0.25em]">
                AI
              </p>
            </div>

          </div>


          {/* Header */}
          <div className="mb-8">
  <h2 className="text-4xl font-bold text-slate-900 tracking-tight">
    Create your account
  </h2>

  <p className="text-slate-500 mt-2">
    Build your profile and let opportunities find you.
  </p>
</div>


          {/* Form Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-7 sm:p-9">

            {/* =================================================
                PERSONAL DETAILS
            ================================================== */}
            <section>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                  <User size={18} className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Personal Details
                  </h3>

                  <p className="text-xs text-slate-400">
                    Tell us a little about yourself
                  </p>
                </div>

              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Full Name */}
                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                  />

                </div>


                {/* Email */}
                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                  />

                </div>


                {/* Contact */}
                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Contact Number
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                  />

                </div>


                {/* Location */}
                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Location
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="City, State"
                    required
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                  />

                </div>

              </div>

            </section>


            {/* Divider */}
            <div className="h-px bg-slate-200 my-8" />


            {/* =================================================
                AVAILABILITY
            ================================================== */}
            <section>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Availability
                <span className="text-red-500 ml-1">*</span>
              </label>

              <select
                required
                className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 text-slate-700 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
              >

                <option value="">
                  Select your availability
                </option>

                <option value="immediate">
                  Immediately
                </option>

                <option value="1-month">
                  Within 1 month
                </option>

                <option value="3-months">
                  Within 3 months
                </option>

                <option value="not-available">
                  Not currently available
                </option>

              </select>

            </section>


            {/* Divider */}
            <div className="h-px bg-slate-200 my-8" />


            {/* =================================================
                PROFESSIONAL DETAILS
            ================================================== */}
            <section>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center">
                  <FileText size={18} className="text-indigo-600" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Professional Details
                  </h3>

                  <p className="text-xs text-slate-400">
                    Help providers understand your work
                  </p>
                </div>

              </div>


              {/* Portfolio */}
              <div className="mb-6">

  <label className="block text-sm font-semibold text-slate-700 mb-2">
    Portfolio Link
    <span className="text-red-500 ml-1">*</span>
  </label>

  <input
    type="url"
    required
    placeholder="https://yourportfolio.com"
    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
  />

</div>


              {/* Resume */}
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Resume
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <label className="w-full min-h-36 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 hover:bg-blue-50 hover:border-blue-400 flex flex-col items-center justify-center cursor-pointer transition">

                  {resumeName ? (
                    <>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                        <FileText
                          size={23}
                          className="text-blue-600"
                        />
                      </div>

                      <p className="font-semibold text-slate-700 text-sm">
                        {resumeName}
                      </p>

                      <p className="text-xs text-green-600 mt-1">
                        PDF ready
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                        <Upload
                          size={22}
                          className="text-blue-600"
                        />
                      </div>

                      <p className="font-semibold text-slate-700 text-sm">
                        Upload your resume
                      </p>

                      <p className="text-xs text-slate-400 mt-1">
                        PDF only • Maximum 5 MB
                      </p>
                    </>
                  )}

                  <input
                    type="file"
                    accept=".pdf,application/pdf"
                    onChange={handleResumeChange}
                    required={!resumeName}
                    className="hidden"
                  />

                </label>

              </div>

            </section>


            {/* Divider */}
            <div className="h-px bg-slate-200 my-8" />


            {/* =================================================
                ACCOUNT SECURITY
            ================================================== */}
            <section>

              <div className="flex items-center gap-3 mb-5">

                <div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center">
                  <Lock size={18} className="text-violet-600" />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Account Security
                  </h3>

                  <p className="text-xs text-slate-400">
                    Keep your account secure
                  </p>
                </div>

              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Password */}
                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Password
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      required
                      className="w-full h-12 px-4 pr-12 rounded-xl border border-slate-300 bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>


                {/* Confirm Password */}
                <div>

                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Confirm Password
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <div className="relative">

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm password"
                      required
                      className="w-full h-12 px-4 pr-12 rounded-xl border border-slate-300 bg-slate-50 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>

              </div>

              <p className="text-xs text-slate-400 mt-3">
                Use at least 8 characters with letters and numbers.
              </p>

            </section>


            {/* =================================================
                SUBMIT
            ================================================== */}
            <button
              type="button"
              className="w-full h-13 mt-8 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold shadow-lg shadow-blue-600/20 transition"
            >
              Create Candidate Account
            </button>


            {/* Login */}
            <p className="text-center text-sm text-slate-500 mt-6">

              Already have an account?{" "}

              <Link
                to="/candidate/login"
                className="font-semibold text-blue-600 hover:text-blue-700 hover:underline"
              >
                Login
              </Link>

            </p>

          </div>


          {/* Footer */}
          <p className="text-center text-xs text-slate-400 mt-6">
            Your information helps FlexConnect AI find better opportunities for you.
          </p>

        </div>

      </div>

    </div>
  );
}

export default CandidateSignup;