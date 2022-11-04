import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

function Pages() {
  const { device } = useContext(Context)!;
  const pagesCount = Math.ceil(device.totalCount / device.limit);
  const pages = [];

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }
  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item active={device.page === page} key={page} onClick={() => device.setPage(page)}>
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
}

export default observer(Pages);
