interface YouTubeVideoProps {
  videoId: string
  title: string
}

export function YoutubeVideo({ videoId, title }: YouTubeVideoProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

// Also export as YouTubeVideo for backward compatibility
export { YoutubeVideo as YouTubeVideo }

