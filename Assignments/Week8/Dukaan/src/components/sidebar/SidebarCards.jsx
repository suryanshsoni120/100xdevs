export const SidebarCards = ({ title, svg }) => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-5 p-3 hover:bg-blue-740">
          <div
            className="col-span-1 pl-4"
            dangerouslySetInnerHTML={{ __html: svg }}
          ></div>
          <div className="col-span-3 text-white pl-2">{title}</div>
        </div>
      </div>
    </div>
  )
}
