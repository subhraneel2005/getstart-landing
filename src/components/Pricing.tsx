import React from 'react'

function Pricing() {
  return (
    <>
    <div className="min-h-screen bg-base-200 py-12 px-4 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Save hours of repetitive code,</h1>
        <h2 className="text-5xl font-bold mb-8">ship fast, get profitable!</h2>
        <div className="flex items-center justify-center gap-2">
          <span className="text-success">$10 off</span>
          <span>for the first 50 customers</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Starter Plan */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Starter</h2>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-lg line-through opacity-50">$49</span>
              <span className="text-5xl font-bold">$19</span>
              <span className="opacity-70">USD</span>
            </div>
            <div className="space-y-4">
              {[
                "NextJS boilerplate",
                "SEO & Blog",
                "Mailgun emails",
                "Stripe / Lemon Squeezy",
                "MongoDB / Supabase",
                "Google Oauth & Magic Links",
                "Components & animations",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-success"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </div>
              ))}
              {[
                "ChatGPT prompts for terms & privacy",
                "Discord community & Leaderboard",
                "Lifetime updates",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>
            <div className="card-actions mt-6">
              <button className="btn btn-primary btn-block">GetStart</button>
            </div>
            <p className="text-center text-sm mt-2">Pay once. Build unlimited projects!</p>
          </div>
        </div>

        {/* All-in Plan */}
        <div className="card bg-base-100 shadow-xl relative border-[2px] border-yellow-300">
          <div className="absolute -top-4 right-4">
            <div className="badge badge-warning p-3">POPULAR</div>
          </div>
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">All-in</h2>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-lg line-through opacity-50">$79</span>
              <span className="text-5xl font-bold">$39</span>
              <span className="opacity-70">USD</span>
            </div>
            <div className="space-y-4">
              {[
                "NextJS boilerplate",
                "SEO & Blog",
                "Mailgun emails",
                "Stripe / Lemon Squeezy",
                "MongoDB / Supabase",
                "Google Oauth & Magic Links",
                "Components & animations",
                "ChatGPT prompts for terms & privacy",
                "Discord community & Leaderboard",
                "Lifetime updates",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-success"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                  {feature === "Lifetime updates" && (
                    <span className="badge badge-sm badge-success">Updated 1 day ago</span>
                  )}
                </div>
              ))}
            </div>
            <div className="card-actions mt-6">
              <button className="btn btn-primary bg-yellow-300 btn-block">GetStart</button>
            </div>
            <p className="text-center text-sm mt-2">Pay once. Build unlimited projects!</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pricing