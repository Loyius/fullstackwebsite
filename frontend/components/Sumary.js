import React from "react";

const Sumary = () => {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        Order Summary
                    </h2>

                    <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Billing & Delivery Information
                        </h4>

                        <dl>
                            <dt className="text-base font-medium text-gray-900 dark:text-white">
                                Individual
                            </dt>
                            <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                                Bonnie Green - +1 234 567 890, San Francisco, California, United States, 3454, Scott Street
                            </dd>
                        </dl>

                        <button
                            type="button"
                            className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
                        >
                            Edit
                        </button>
                    </div>

                    {/* Product Table */}
                    <div className="mt-6 sm:mt-8">
                        <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                            <table className="w-full text-left font-medium text-gray-900 dark:text-white">
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {/* Example of Product */}
                                    <tr>
                                        <td className="whitespace-nowrap py-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    className="w-10 h-10"
                                                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                                                    alt="Product"
                                                />
                                                <span className="hover:underline">Apple iMac 27”</span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-base">x1</td>
                                        <td className="p-4 text-right font-bold">$1,499</td>
                                    </tr>
                                    {/* Additional products can be added here */}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="mt-4 space-y-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Order Summary
                        </h4>
                        <div className="space-y-4">
                            <dl className="flex items-center justify-between">
                                <dt className="text-gray-500 dark:text-gray-400">Original Price</dt>
                                <dd className="text-base font-medium text-gray-900 dark:text-white">
                                    $6,592.00
                                </dd>
                            </dl>
                            <dl className="flex items-center justify-between">
                                <dt className="text-gray-500 dark:text-gray-400">Savings</dt>
                                <dd className="text-base font-medium text-green-500">-$299.00</dd>
                            </dl>
                            <dl className="flex items-center justify-between">
                                <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                                <dd className="text-base font-medium text-gray-900 dark:text-white">
                                    $799.00
                                </dd>
                            </dl>
                        </div>

                        {/* Total */}
                        <dl className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-700">
                            <dt className="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                            <dd className="text-lg font-bold text-gray-900 dark:text-white">
                                $7,191.00
                            </dd>
                        </dl>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button
                            type="button"
                            className="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Return to Shopping
                        </button>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
                        >
                            Submit Order
                        </button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Sumary;
