export default function Article({ children }) {
  return (
    <article className="prose prose-a:no-underline prose-a:text-blue-600 prose-a:hover:underline prose-sm sm:prose-base lg:prose-lg mx-auto">
      {children}
    </article>
  )
}