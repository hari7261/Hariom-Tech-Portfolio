import Head from 'next/head'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article
      className="md:grid md:grid-cols-4 md:items-baseline transform transition duration-300 hover:scale-105 hover:shadow-lg"
      aria-label={`Read article titled ${article.title}`}
    >
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block text-gray-500 dark:text-gray-400"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - Hariom Kumar😉</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
        <meta property="og:title" content="Articles - Hariom Kumar😉" />
        <meta property="og:description" content="Thoughts on programming, leadership, and more." />
        <meta property="og:image" content="/path-to-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SimpleLayout
        title={
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 bg-clip-text text-transparent animate-gradient-slow">
            Writing on software development, company building, and marketing.
          </span>
        }
        intro="All of my long-form thoughts on coding, leadership, product development, and more, collected in chronological order."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  const articles = await getAllArticles()
  return {
    props: {
      articles: articles.map(({ component, ...meta }) => meta),
    },
  }
}
