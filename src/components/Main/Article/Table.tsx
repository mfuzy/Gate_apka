import React, { useRef } from "react";
import "./Table.css";

//interface TableProps
export interface TableProps {
  items: {
    id: number;
    title: string;
    code: string;
    label: string;
    pieces: number;
    url: string;
  }[];
  actualItem: any;
  addItem: (newItem: any) => void;
  deleteItem: (
    obj: any,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handlePieces: (e: React.ChangeEvent<HTMLInputElement>, obj: any) => void;
  changeActual: (
    obj: any,
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => void;
}

//component Table
const Table: React.SFC<TableProps> = props => {
  //destructuring props
  const {
    items,
    actualItem,
    addItem,
    deleteItem,
    handlePieces,
    changeActual
  } = props;

  //refs
  const inpId = useRef<HTMLInputElement>(null);
  const inpTitle = useRef<HTMLInputElement>(null);
  const inpCode = useRef<HTMLInputElement>(null);
  const inpLabel = useRef<HTMLInputElement>(null);
  const inpPieces = useRef<HTMLInputElement>(null);
  const inpUrl = useRef<HTMLInputElement>(null);

  //handleCreate
  const handleCreate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (
      inpId.current !== null &&
      inpTitle.current !== null &&
      inpCode.current !== null &&
      inpLabel.current !== null &&
      inpPieces.current !== null &&
      inpUrl.current !== null
    ) {
      const itemToCreate: any = {
        id: inpId.current.value,
        title: inpTitle.current.value,
        code: inpCode.current.value,
        label: inpLabel.current.value,
        pieces: inpPieces.current.value,
        url: inpUrl.current.value
      };
      addItem(itemToCreate);
    }
  };

  //template
  return (
    <div>
      <div>
        <table
          style={{
            border: "1px solid black"
          }}
        >
          <thead>
            <tr>
              <th>title</th>
              <th>label</th>
              <th>pieces</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              return (
                <tr
                  key={item.id}
                  className={
                    "table-row " + (item === actualItem ? "active" : "")
                  }
                  onClick={e => {
                    changeActual(item, e);
                  }}
                >
                  <td>{item.title}</td>
                  <td>{item.label}</td>
                  <td>
                    <input
                      type="number"
                      value={item.pieces}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handlePieces(e, item);
                      }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={e => {
                        deleteItem(item, e);
                      }}
                    >
                      vymaž
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Vytvor novú položku:</h3>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="Id">Id: </label>
              </td>
              <td>
                <input id="Id" type="number" ref={inpId} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="title">Title: </label>
              </td>
              <td>
                <input id="title" type="text" ref={inpTitle} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="code">Code: </label>
              </td>
              <td>
                <input id="code" type="string" ref={inpCode} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="label">Label: </label>
              </td>
              <td>
                <input id="label" type="text" ref={inpLabel} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="pieces">Pieces: </label>
              </td>
              <td>
                <input id="pieces" type="number" ref={inpPieces} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="url">URL: </label>
              </td>
              <td>
                <input id="url" type="string" ref={inpUrl} />
              </td>
            </tr>

            <tr>
              <td>
                <button onClick={handleCreate}>vytvor</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
