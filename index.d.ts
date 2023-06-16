type NumberSer = (X: number, bytes?: number) => string;

type NumberDes = (y: string, bytes?: number) => number;

interface NumberSerDes {
	Ser: NumberSer;
	Des: NumberDes;
}

interface SquashRaycastResult {
	Material: Enum.Material;
	Distance: number;
	Position: Vector3;
	Normal: Vector3;
}

declare const Squash: {
	boolean: {
		ser: (
			x1?: boolean,
			x2?: boolean,
			x3?: boolean,
			x4?: boolean,
			x5?: boolean,
			x6?: boolean,
			x7?: boolean,
			x8?: boolean,
		) => string;
		des: (y: string) => LuaTuple<[boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean]>;
		serarr: (x: Array<boolean>) => string;
		desarr: (y: string) => Array<boolean>;
	};
	uint: {
		ser: (x: number, y: number) => string;
		des: (y: string, btyes?: number) => number;
		desarr: (y: string, btyes?: number) => number[];
	};
	init: {
		ser: (x: number, btyes?: number) => String;
		des: (y: string, btyes?: number) => number;
		serarr: (x: Array<number>, btyes?: number) => string;
		desarr: (y: string, btyes?: number) => Array<number>;
	};
	number: {
		ser: (x: number, btyes?: number) => string;
		des: (y: string, btyes?: number) => number;
		serarr: (x: Array<number>, btyes?: number) => Array<string>;
		desarr: (y: String, bytes?: number) => Array<number>;
	};
	string: {
		aplhabet: (source: string) => string;
		convert: (x: string, inAplhabet: string, outAlphabet: string) => string;
		ser: (x: string, aplhabet?: string) => string;
		des: (y: string, aplhabet?: string) => string;
		serarr: (x: Array<string>, aplhabet?: string) => string;
		desarr: (y: string, aplhabet?: string) => Array<string>;
	};

	Vector2: {
		ser: (x: Vector2, serdes?: NumberSerDes, bytes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, bytes?: number) => Vector2;
		serarr: (x: Array<Vector2>, serdes?: NumberSerDes, btyes?: number) => string;
		desarr: (y: string, serdes?: NumberSerDes, btyes?: number) => Array<Vector2>;
	};

	Vector2init16: {
		ser: (x: Vector2int16, serdes?: NumberSerDes, btyes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, bytes?: number) => Vector2int16;
		serarr: (x: Array<Vector2int16>) => string;
		desarr: (y: string) => Array<Vector2int16>;
	};

	Vector3init16: {
		ser: (x: Vector3int16, serdes?: NumberSerDes, bytes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, bytes?: number) => Vector3int16;
		serarr: (x: Array<Vector3int16>) => string;
		desarr: (y: string) => Array<Vector3int16>;
	};

	CFrame: {
		ser: (x: CFrame, serdes?: NumberSerDes, posBytes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, posBytes?: number) => CFrame;
		serarr: (x: Array<CFrame>) => string;
		desarr: (y: string) => Array<CFrame>;
	};

	Enum: {
		ser: (x: Enum) => string;
		des: (y: string) => Enum;
		serarr: (x: Array<Enum>) => string;
		desarr: (y: string) => Array<Enum>;
	};

	EnumItem: {
		ser: (enumItem: EnumItem, Enum: Enum) => string;
		des: (y: string, Enum: Enum) => EnumItem;
		serarr: (x: Array<EnumItem>, Enum: Enum) => string;
		desarr: (y: string, Enum: Enum) => Array<EnumItem>;
	};

	Axes: {
		ser: (x: Axes) => string;
		des: (y: string) => Axes;
		srarr: (x: Array<Axes>) => string;
		desarr: (y: string) => Array<Axes>;
	};

	BrickColor: {
		ser: (x: BrickColor) => string;
		des: (y: string) => BrickColor;
		serarr: (x: Array<BrickColor>) => string;
		desarr: (y: string) => Array<BrickColor>;
	};

	Color3: {
		ser: (x: Color3) => string;
		des: (y: string) => Color3;
		serarr: (x: Array<Color3>) => string;
		desarr: (y: string) => Array<Color3>;
	};

	CatalogSearchParams: {
		ser: (x: CatalogSearchParams, aplhabet?: string) => string;
		des: (y: string, aplhabet: string) => CatalogSearchParams;
		serarr: (x: Array<CatalogSearchParams>, aplhabet?: string) => string;
		desarr: (y: string, aplhabet?: string) => Array<CatalogSearchParams>;
	};

	DateTime: {
		ser: (x: DateTime) => string;
		des: (y: string) => DateTime;
		serarr: (x: Array<DateTime>) => string;
		desarr: (y: string) => Array<DateTime>;
	};

	ColorSequenceKeypoint: {
		ser: (x: ColorSequenceKeypoint) => string;
		des: (y: string) => ColorSequenceKeypoint;
		serarr: (x: Array<ColorSequenceKeypoint>) => string;
		desarr: (y: string) => Array<ColorSequenceKeypoint>;
	};

	ColorSequence: {
		ser: (x: ColorSequence) => string;
		des: (y: string) => ColorSequence;
		serarr: (x: Array<ColorSequence>) => string;
		desarr: (y: string) => Array<ColorSequence>;
	};

	Faces: {
		ser: (x: Faces) => string;
		des: (y: string) => Faces;
		serarr: (x: Array<Faces>) => string;
		desarr: (y: string) => Array<Faces>;
	};

	FloatCurveKey: {
		ser: (x: FloatCurveKey) => string;
		des: (y: string) => FloatCurveKey;
		serarr: (x: Array<FloatCurveKey>, serdes?: NumberSerDes, bytes?: number) => string;
		desarr: (y: string, serdes?: NumberSerDes, bytes?: number) => Array<FloatCurveKey>;
	};

	Font: {
		ser: (x: Font) => string;
		des: (y: string) => Font;
		serarr: (x: Array<Font>) => string;
		desarr: (y: string) => Array<Font>;
	};

	NumberRange: {
		ser: (x: NumberRange, serdes?: NumberSerDes, bytes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, bytes?: number) => NumberRange;
		serarr: (x: Array<NumberRange>, serdes?: NumberSerDes, bytes?: number) => string;
		desarr: (y: string, serdes?: NumberSerDes, bytes?: number) => Array<NumberRange>;

		NumberSequenceKeyPoint: {
			ser: (x: NumberSequenceKeypoint, serdes?: NumberSerDes, bytes?: number) => string;
			des: (y: string, serdes?: NumberSerDes, bytes?: number) => NumberSequenceKeypoint;
			serarr: (x: Array<NumberSequenceKeypoint>, serdes?: NumberSerDes, bytes?: number) => string;
			desarr: (y: string, serdes?: NumberSerDes, bytes?: number) => Array<NumberSequenceKeypoint>;
		};
	};

	NumberSequence: {
		ser: (x: NumberSequence, serdes?: NumberSerDes, bytes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, bytes?: number) => NumberSequence;
		serarr: (x: Array<NumberSequence>, serdes?: NumberSerDes, bytes?: number) => string;
		desarr: (y: string, serdes?: NumberSerDes, bytes?: number) => Array<NumberSequence>;
	};

	OverlapParams: {
		ser: (x: OverlapParams) => string;
		des: (y: string) => OverlapParams;
		serarr: (x: Array<OverlapParams>) => string;
		desarr: (y: string) => Array<OverlapParams>;
	};

	RaycastParams: {
		ser: (x: RaycastParams) => string;
		des: (y: string) => RaycastParams;
		serarr: (x: Array<RaycastParams>) => string;
		desarr: (y: string) => Array<RaycastParams>;
	};

	Ray: {
		ser: (x: Ray, serdes?: NumberSerDes, bytes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, bytes?: number) => Ray;
		serarr: (x: Array<Ray>, serdes?: NumberSerDes, bytes?: number) => string;
		desarr: (y: string, serdes?: NumberSerDes, bytes?: number) => Array<Ray>;
	};

	RaycastResult: {
		ser: (x: RaycastResult, serdes?: NumberSerDes, bytes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, bytes?: number) => SquashRaycastResult;
		serarr: (x: Array<RaycastResult>, serdes?: NumberSerDes, bytes?: number) => string;
		desarr: (y: string, serdes?: NumberSerDes, bytes?: number) => Array<RaycastResult>;
	};

	TweenInfo: {
		ser: (x: TweenInfo, serdes?: NumberSerDes, bytes?: number) => string;
		des: (y: string, serdes?: NumberSerDes, bytes?: number) => TweenInfo;
		serarr: (x: Array<TweenInfo>, serdes?: NumberSerDes, bytes?: number) => string;
		desarr: (y: string, serdes?: NumberSerDes, bytes?: number) => Array<TweenInfo>;
	};
};

export = Squash;
