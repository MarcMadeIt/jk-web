"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleLeft } from "react-icons/fa";
import { createTeacher } from "@/lib/server/actions";

const SetupTeachersCreate = ({
  onSave,
  onBack,
}: {
  onSave: () => void;
  onBack: () => void;
}) => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [descEng, setDescEng] = useState("");
  const [image, setImage] = useState<File | string>("");
  const [priority, setPriority] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    desc: "",
    descEng: "",
    image: "",
    priority: "",
  });
  const [loading, setLoading] = useState(false);

  const handleDescChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 250) {
      setDesc(e.target.value);
    }
  };
  const handleDescEngChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 250) {
      setDescEng(e.target.value);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !desc || !descEng || !image || !priority) {
      setErrors({
        name: !name ? t("createTeacher.errors.name") : "",
        desc: !desc ? t("createTeacher.errors.desc") : "",
        descEng: !descEng ? t("createTeacher.errors.descEng") : "",
        image: !image ? t("createTeacher.errors.image") : "",
        priority: !priority ? t("createTeacher.errors.priority") : "",
      });
      setLoading(false);
      return;
    }

    try {
      await createTeacher({
        name,
        desc,
        desc_eng: descEng,
        since: priority,
        image: typeof image === "string" ? undefined : image,
      });
      onSave();
    } catch (error) {
      console.error("Failed to create teacher:", error);
      alert(t("createTeacher.createError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full p-3 pt-5">
      <div className="mb-5">
        <button onClick={onBack} className="btn btn-ghost">
          <FaAngleLeft />
          {t("setup.back")}
        </button>
      </div>

      <span className="text-lg font-bold">{t("createTeacher.formTitle")}</span>

      <form onSubmit={handleSave} className="flex flex-col gap-5 w-full">
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <div className="flex flex-col gap-5 w-full">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                {t("createTeacher.name")}
              </legend>
              <input
                type="text"
                className="input input-bordered input-md"
                placeholder={t("createTeacher.placeholders.name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name}</span>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                {t("createTeacher.image")}
              </legend>
              <input
                type="file"
                accept="image/png, image/webp, image/jpeg, image/jpg"
                className="file-input"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setImage(file);
                  } else {
                    setImage("");
                  }
                }}
              />
              <label className="label text-xs">
                {t("createTeacher.imageFormats")}
              </label>
              {errors.image && (
                <span className="text-xs text-red-500">{errors.image}</span>
              )}
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                {t("createTeacher.since")}
              </legend>
              <input
                type="date"
                className="input input-bordered input-md"
                placeholder={t("createTeacher.placeholders.since")}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              />
              {errors.priority && (
                <span className="text-xs text-red-500">{errors.priority}</span>
              )}
            </fieldset>
          </div>
        </div>

        <fieldset className="fieldset md:w-md">
          <legend className="fieldset-legend">{t("createTeacher.desc")}</legend>
          <textarea
            className="textarea textarea-bordered textarea-md w-full resize-none"
            placeholder={t("createTeacher.placeholders.desc")}
            value={desc}
            onChange={handleDescChange}
            rows={5}
            maxLength={250}
          />
          <div className="text-right text-xs font-medium text-gray-500">
            {desc.length} / 250
          </div>
          {errors.desc && (
            <span className="text-xs text-red-500">{errors.desc}</span>
          )}
        </fieldset>

        <fieldset className="fieldset md:w-md">
          <legend className="fieldset-legend">
            {t("createTeacher.descEng")}
          </legend>
          <textarea
            className="textarea textarea-bordered textarea-md w-full resize-none"
            placeholder={t("createTeacher.placeholders.descEng")}
            value={descEng}
            onChange={handleDescEngChange}
            rows={5}
            maxLength={250}
          />
          <div className="text-right text-xs font-medium text-gray-500">
            {descEng.length} / 250
          </div>
          {errors.descEng && (
            <span className="text-xs text-red-500">{errors.descEng}</span>
          )}
        </fieldset>

        <div>
          <button
            type="submit"
            className="btn btn-primary mt-2"
            disabled={loading}
          >
            {loading ? t("saving") : t("save")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetupTeachersCreate;
