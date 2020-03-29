import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const BlockLoader: React.FC<IContentLoaderProps> = (props) => {
  return (
    <ContentLoader {...props}>
      <rect x="15" y="15" rx="4" ry="4" width="130" height="5" />
      <rect x="155" y="15" rx="3" ry="3" width="130" height="5" />
      <rect x="295" y="15" rx="3" ry="3" width="90" height="5" />
      <rect x="15" y="32.5" rx="4" ry="4" width="130" height="5" />
      <rect x="155" y="32.5" rx="3" ry="3" width="130" height="5" />
      <rect x="295" y="32.5" rx="3" ry="3" width="90" height="5" />
      <rect x="15" y="50" rx="3" ry="3" width="90" height="5" />
      <rect x="115" y="50" rx="3" ry="3" width="60" height="5" />
      <rect x="185" y="50" rx="3" ry="3" width="200" height="5" />
      <rect x="15" y="70" rx="3" ry="3" width="90" height="5" />
      <rect x="115" y="70" rx="3" ry="3" width="60" height="5" />
      <rect x="185" y="70" rx="3" ry="3" width="200" height="5" />
      <rect x="15" y="90" rx="3" ry="3" width="130" height="5" />
      <rect x="160" y="90" rx="3" ry="3" width="120" height="5" />
      <rect x="290" y="90" rx="3" ry="3" width="95" height="5" />
      <rect x="15" y="110" rx="3" ry="3" width="130" height="5" />
      <rect x="160" y="110" rx="3" ry="3" width="120" height="5" />
      <rect x="290" y="110" rx="3" ry="3" width="95" height="5" />
      <rect x="15" y="130" rx="3" ry="3" width="130" height="5" />
      <rect x="160" y="130" rx="3" ry="3" width="225" height="5" />
      <rect x="15" y="150" rx="3" ry="3" width="130" height="5" />
      <rect x="160" y="150" rx="3" ry="3" width="225" height="5" />
      <rect x="15" y="170" rx="4" ry="4" width="130" height="5" />
      <rect x="155" y="170" rx="3" ry="3" width="130" height="5" />
      <rect x="295" y="170" rx="3" ry="3" width="90" height="5" />
    </ContentLoader>
  )
}

export default BlockLoader
