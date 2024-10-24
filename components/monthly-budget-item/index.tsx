import ITransaction from "@/interfaces/ITransaction";
import { CategoryType } from "@/types";
import { categoryToEmoji, formatCurrency, formatDate } from "@/utils";

export default function MonthlyBudgetItem({
  transaction,
  currency,
}: {
  transaction: ITransaction;
  currency: string;
}) {
  return (
    <div className="border-b-[1px] border-neutral-700">
      <div className="flex flex-wrap hover:bg-neutral-700 rounded-md -mx-2 space-x-2 py-1">
        <div className="ml-2 grow md:w-auto w-full flex items-center">
          {categoryToEmoji(transaction.category)}
          <input type="text" value={transaction.title} className="grow" />
        </div>
        <label className="flex items-center">
          <span className="text-neutral-500 inline-block">
            {formatCurrency(currency)}
          </span>
          <div className="-ml-1">
            <input type="text" value={transaction.amount} className="w-20" />
          </div>
        </label>
        <select
          name="category"
          defaultValue={transaction.category}
          style={{
            color:
              transaction.category === CategoryType.Income
                ? "#16a34a"
                : "white",
          }}
          className="w-48"
        >
          {Object.values(CategoryType).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="relative w-32 input">
          <label className="date-picker-label text-white ml-[4px]">
            {formatDate(new Date(transaction.transactionDate))}
            <input
              className="picker"
              value={`${transaction.transactionDate}`}
              type="date"
              onClick={(e) => e.currentTarget.showPicker()}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
