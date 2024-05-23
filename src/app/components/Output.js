"use client";
import React from "react";

const Output = ({ output, testStatus }) => {
  return (
    <>
      {testStatus === "success" ? (
        <div>
          <div>
            {output.referral_user_email && (
              <div>
                <div class="p-4 border border-gray-300 rounded-md mb-4">
                  <div class="flex items-center space-x-8">
                    <div>
                      <span class="font-bold text-gray-800">USER EMAIL:</span>
                      <span class="ml-2 text-gray-600">
                        {output.app_user_email}
                      </span>
                    </div>
                    <div>
                      <span class="font-bold text-gray-800">CNPJ:</span>
                      <span class="ml-2 text-gray-600">{output.cnpj}</span>
                    </div>
                  </div>

                  <div class="flex items-center space-x-8">
                    <div>
                      <span class="font-bold text-gray-800">
                        REFERRAL EMAIL:
                      </span>
                      <span class="ml-2 text-gray-600">
                        {output.referral_user_email}
                      </span>
                    </div>
                    <div>
                      <span class="font-bold text-gray-800">CNPJ:</span>
                      <span class="ml-2 text-gray-600">
                        {output.referral_cnpj}
                      </span>
                    </div>
                  </div>
                </div>

                <br />

                <div class="p-4 border border-gray-300 rounded-md mb-4">
                  <div>
                    <span class="font-bold text-gray-800">REMESSA FILE:</span>
                    <span class="ml-2 text-gray-600">
                      {output.remessa_generated_file}
                    </span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-800">
                      SEU NUMERO FOR MASS REMESSA:
                    </span>
                    <span class="ml-2 text-gray-600">
                      {output.remessa_generated_seu_numero}
                    </span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-800">
                      MASS REMESSA FILE:
                    </span>
                    <span class="ml-2 text-gray-600">
                      {output.mass_remessa_generated_file}
                    </span>
                  </div>
                  <div>
                    <span class="font-bold text-gray-800">
                      SEU NUMERO FOR MASS REMESSA:
                    </span>
                    <span class="ml-2 text-gray-600">
                      {output.remessa_generated_seu_numero_for_mass_remessa}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-5xl font-bold text-green-800">
            {output.message}
          </div>

          <div className="text-3xl">{output.result}</div>
          <div className="text-3xl">{output.number}</div>
        </div>
      ) : (
        <div class="p-4 border border-gray-300 rounded-md mb-4">
          <div className="text-3xl text-center font-bold text-red-600">
            {output}
          </div>
        </div>
      )}
    </>
  );
};

export default Output;
