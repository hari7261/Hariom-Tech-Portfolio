import Head from 'next/head'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Spencer Sharp</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <div className="p-8">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Thanks for subscribing!
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          You’ll hear from me soon.
          </p>
          </div>
    </>
  )
}
