
CREATE EXTENSION pgcrypto;

SELECT gen_random_uuid();


-- DROP TABLE public."Behaviours";

CREATE TABLE IF NOT EXISTS public."Behaviours"
(
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    document jsonb,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Behaviours_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


CREATE INDEX idxbehaviours_document ON public."Behaviours" using gin (document);




