import React from "react"

const Tag = ({ name }: { name: string }) => (
  <span className="px-2 py-1 text-xs capitalize border border-gray-300 border-solid rounded-full">
    {name}
  </span>
)

export default Tag
