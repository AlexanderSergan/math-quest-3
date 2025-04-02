import { SocialMediaIcons } from "@/components/social-media-icons"

export default function SocialTest() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-8">Social Media Icons Test</h1>

      <div className="p-8 border rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Default Size</h2>
        <SocialMediaIcons />
      </div>

      <div className="p-8 border rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">Large Size</h2>
        <SocialMediaIcons iconSize={32} />
      </div>

      <div className="p-8 border rounded-lg shadow-sm mb-8">
        <h2 className="text-xl font-semibold mb-4">With Labels</h2>
        <SocialMediaIcons showLabels={true} />
      </div>

      <div className="p-8 border rounded-lg shadow-sm bg-gray-900">
        <h2 className="text-xl font-semibold mb-4 text-white">On Dark Background</h2>
        <SocialMediaIcons className="text-white hover:text-gray-300" />
      </div>
    </div>
  )
}

