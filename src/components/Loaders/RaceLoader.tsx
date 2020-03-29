import React from "react"
import ContentLoader, { IContentLoaderProps } from "react-content-loader"

const RaceLoader: React.FC<IContentLoaderProps> = (props) => {
  return (
    <ContentLoader {...props}>
      <rect x="20" y="20" rx="5" ry="5" width="350" height="200" />
      <rect x="450" y="20" rx="5" ry="5" width="500" height="12" />
      <rect x="450" y="40" rx="5" ry="5" width="350" height="12" />
      <rect x="450" y="60" rx="5" ry="5" width="200" height="12" />
      <rect x="450" y="80" rx="5" ry="5" width="500" height="12" />
      <rect x="450" y="100" rx="5" ry="5" width="350" height="12" />
      <rect x="450" y="120" rx="5" ry="5" width="200" height="12" />
      <rect x="450" y="140" rx="5" ry="5" width="500" height="12" />
      <rect x="450" y="160" rx="5" ry="5" width="350" height="12" />
      <rect x="450" y="180" rx="5" ry="5" width="200" height="12" />
    </ContentLoader>
  )
}

export default RaceLoader
