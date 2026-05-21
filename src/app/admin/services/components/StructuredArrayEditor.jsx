"use client";

import { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

export default function StructuredArrayEditor({ 
  label, 
  items = [], 
  onChange, 
  fields = [], 
  placeholderItem = {},
  isStringArray = false,
  headerMeta = null,
  onHeaderChange = () => {}
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddItem = () => {
    if (isStringArray) {
      onChange([...items, ""]);
    } else {
      onChange([...items, { ...placeholderItem }]);
    }
  };

  const handleRemoveItem = (index) => {
    const updated = items.filter((_, idx) => idx !== index);
    onChange(updated);
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updated = items.map((item, idx) => {
      if (idx === index) {
        if (isStringArray) {
          return value;
        }
        return { ...item, [fieldName]: value };
      }
      return item;
    });
    onChange(updated);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-4">
      {/* Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors border-b border-gray-200"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">{label}</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
            {items.length} items
          </span>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 space-y-4 bg-white">
          {headerMeta && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tag (optional)</label>
                <input
                  type="text"
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  value={headerMeta.tag || ""}
                  onChange={(e) => onHeaderChange({ ...headerMeta, tag: e.target.value })}
                  placeholder="Tag (optional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                <input
                  type="text"
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  value={headerMeta.title || ""}
                  onChange={(e) => onHeaderChange({ ...headerMeta, title: e.target.value })}
                  placeholder="Section title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Section Description</label>
                <input
                  type="text"
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                  value={headerMeta.description || ""}
                  onChange={(e) => onHeaderChange({ ...headerMeta, description: e.target.value })}
                  placeholder="Short section description"
                />
              </div>
            </div>
          )}
          {items.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">No items added yet.</p>
          ) : (
            <div className="space-y-4 divide-y divide-gray-100">
              {items.map((item, index) => (
                <div key={index} className={`pt-4 first:pt-0 flex items-start gap-4 ${isStringArray ? "items-center" : ""}`}>
                  <div className="flex-grow space-y-3">
                    {isStringArray ? (
                      <input
                        type="text"
                        className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={item || ""}
                        onChange={(e) => handleFieldChange(index, null, e.target.value)}
                        placeholder={`Enter ${label.toLowerCase()} item`}
                      />
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {fields.map((field) => (
                          <div key={field.name} className={field.fullWidth ? "md:col-span-2" : ""}>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              {field.label}
                            </label>
                            {field.type === "textarea" ? (
                              <textarea
                                className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                rows={2}
                                value={item[field.name] || ""}
                                onChange={(e) => handleFieldChange(index, field.name, e.target.value)}
                              />
                            ) : field.type === "select" ? (
                              <select
                                className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                                value={item[field.name] || ""}
                                onChange={(e) => handleFieldChange(index, field.name, e.target.value)}
                              >
                                {field.options.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <input
                                type={field.type || "text"}
                                className="w-full px-3 text-black py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                value={item[field.name] || ""}
                                onChange={(e) => handleFieldChange(index, field.name, e.target.value)}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(index)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg self-center transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={handleAddItem}
            className="w-full mt-2 flex items-center justify-center gap-2 py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:text-blue-600 hover:border-blue-500 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add New Item
          </button>
        </div>
      )}
    </div>
  );
}
