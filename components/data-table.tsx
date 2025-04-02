"use client"

import { useState, useEffect } from "react"

interface DataTableProps {
  data: any[]
  columns: string[]
  columnNames: string[]
  sortColumn: string
  sortDirection: "asc" | "desc"
  onSort: (column: string) => void
}

export function DataTable({ data, columns, columnNames, sortColumn, sortDirection, onSort }: DataTableProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate checking data validity
    try {
      if (!Array.isArray(data)) {
        throw new Error("Data is not an array")
      }
      if (!Array.isArray(columns) || !Array.isArray(columnNames)) {
        throw new Error("Columns configuration is invalid")
      }
      if (columns.length !== columnNames.length) {
        throw new Error("Column names don't match columns")
      }

      setIsLoading(false)
      setError(null)
    } catch (err) {
      console.error("Data table error:", err)
      setIsLoading(false)
      setError(err instanceof Error ? err.message : "Unknown error loading data")
    }
  }, [data, columns, columnNames])

  if (isLoading) {
    return (
      <div className="w-full py-8 text-center">
        <div className="animate-pulse flex justify-center">
          <div className="h-6 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return <div className="w-full py-8 text-center text-red-500">Error: {error}</div>
  }

  if (data.length === 0) {
    return <div className="w-full py-8 text-center text-gray-500">No data available</div>
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={column}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                onClick={() => onSort(column)}
              >
                <div className="flex items-center">
                  {columnNames[index]}
                  {sortColumn === column && <span className="ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {columns.map((column) => (
                <td key={`${rowIndex}-${column}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row[column] !== undefined ? row[column] : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

